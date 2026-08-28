import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("=== NUEVO INTENTO DE GUARDADO ===");
    console.log("Payload recibido:", body);
    
    const {
      timestamp = new Date().toISOString(),
      sessionId = "unknown",
      eventosSeleccionados = "",
      eventoPrincipal = "",
      fechaSeleccionada = "",
      horaSeleccionada = "",
      comidaSeleccionada = "",
      actividadSeleccionada = "",
      durationSeconds = 0,
      device = "unknown",
      resultadoFinal = "accepted",
      version = "v1.0.0"
    } = body;

    // Validación de datos obligatorios
    if (
      !eventoPrincipal || eventoPrincipal === "N/A" ||
      !fechaSeleccionada || fechaSeleccionada === "N/A" ||
      !comidaSeleccionada || comidaSeleccionada === "N/A" ||
      !actividadSeleccionada || actividadSeleccionada === "N/A"
    ) {
      console.warn("Guardado rechazado por validación. Campos obligatorios faltantes o N/A.");
      return NextResponse.json(
        { success: false, message: "Faltan campos obligatorios para guardar la respuesta." },
        { status: 400 }
      );
    }

    // Verificar si las credenciales están configuradas
    if (!process.env.GOOGLE_SHEETS_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.log("Google Sheets credentials not fully configured. Simulating success.");
      // Devolvemos success true para no romper el frontend, simplemente no guardamos.
      return NextResponse.json({ success: true, message: "Credentials not configured, skipping Google Sheets." });
    }

    // Preparar la llave privada
    let privateKeyRaw = process.env.GOOGLE_PRIVATE_KEY;
    // Si la llave se pegó en Vercel con comillas, se las quitamos:
    if (privateKeyRaw.startsWith('"') && privateKeyRaw.endsWith('"')) {
      privateKeyRaw = privateKeyRaw.slice(1, -1);
    } else if (privateKeyRaw.startsWith("'") && privateKeyRaw.endsWith("'")) {
      privateKeyRaw = privateKeyRaw.slice(1, -1);
    }
    
    const privateKey = privateKeyRaw.replace(/\\n/g, "\n");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // La pestaña en Google Sheets se debe llamar "Respuestas"
    const range = "Respuestas!A:L"; 

    const values = [
      [
        timestamp,
        sessionId,
        eventosSeleccionados,
        eventoPrincipal,
        fechaSeleccionada,
        horaSeleccionada,
        comidaSeleccionada,
        actividadSeleccionada,
        durationSeconds,
        device,
        resultadoFinal,
        version
      ]
    ];

    const appendData = async (retryCount = 0): Promise<void> => {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: process.env.GOOGLE_SHEETS_ID,
          range: range,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values,
          },
        });
      } catch (err) {
        if (retryCount < 1) {
          console.warn("Error en el primer intento a Google Sheets. Reintentando en 500ms...");
          await new Promise(res => setTimeout(res, 500));
          return appendData(retryCount + 1);
        }
        throw err;
      }
    };

    await appendData();

    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Error saving to Google Sheets:", error);
    // Retornamos success: true o un error amigable, pero NUNCA lanzamos stack traces sensibles al frontend.
    // El Frontend está diseñado para seguir funcionando incluso si esto falla.
    return NextResponse.json({ success: false, message: "Internal submission error" }, { status: 500 });
  }
}
