import { GoogleGenerativeAI } from "@google/generative-ai";
import { Keyboard } from "react-native";

export async function handleGenerate(
    city: string,
    days: number,
    setTravel: (valor: string) => void,
    setLoading: (boolean: boolean) => void,
) {
    const API_KEY = process.env.API_KEY;

    if (city === "") {
        alert("Você precisa preencher o campo de cidade antes");
        return;
    }

    if (!API_KEY) {
        alert("Ocorreu algum erro interno de servidor");
        return;
    }

    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    setTravel("");
    setLoading(true);
    Keyboard.dismiss();

    const prompt = `Crie um roteiro para uma viagem de exatos ${days} dias na cidade de ${city}. Busque por lugares turísticos, lugares mais visitados. Seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com o nome do local para visitar em cada dia. Escreva os dias em capslock "DIA 1: " também coloque um "-" em cada tópicos,  além disso, coloque as informações de cada dia logo na linha de baixo do respectivo dia, outra coisa, divida os tópicos de roteiro em manhâ, tarde e noite, com apenas uma unica atividade por turno, você pode colocar a atividade na frente do turno, exemplo de como deve ser sua resposta: DIA 1:(salta uma linha) -manhâ: atividade(salta uma linha) -tarde: atividade(salta uma linha) -noite: atividade(salta uma linha)`;

    const result = await model.generateContent(prompt);

    const response = await result.response;
    const text = response.text();
    const cleanText = text.replace(/[*#]/g, "");
    setTravel(cleanText);

    setLoading(false);
}
