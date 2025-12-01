import { ToolHandler, ToolModule } from "../types.js";
import gistTools from "./gist.js";

const tools: ToolModule[] = [
    gistTools,
];

export const toolDefinitions = tools.flatMap((tool) => tool.definitions);
export const toolHandlers = tools.reduce((handlers, tool) => {
    return { ...handlers, ...tool.handlers };
}, {}) as Record<string, ToolHandler>;
