import { serverQueryContent } from "#content/server";

export default defineEventHandler(async (event) => {
    // Fetch all documents
    const docs = await serverQueryContent(event).find();
    return docs;
});
