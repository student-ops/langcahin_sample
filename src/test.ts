import { OpenAI } from "langchain/llms"

require("dotenv").config()

export const runLlm = async () => {
    const llm = new OpenAI({ openAIApiKey: process.env.OPENAI_API_KEY })

    const res = await llm.call("自己紹介してください")
    console.log(res)
}

runLlm()
