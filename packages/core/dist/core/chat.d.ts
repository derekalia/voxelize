import { ChatProtocol, MessageProtocol } from "@voxelize/protocol";
import { z, ZodObject, ZodTypeAny } from "zod";
import { NetIntercept } from "./network";
/**
 * Options for adding a command.
 */
export type CommandOptions<T extends ZodObject<Record<string, ZodTypeAny>> = ZodObject<Record<string, never>>> = {
    description: string;
    category?: string;
    aliases?: string[];
    flags?: string[];
    args?: T;
};
/**
 * Information about a command including its processor and documentation.
 */
export type CommandInfo<T extends ZodObject<Record<string, ZodTypeAny>> = ZodObject<Record<string, never>>> = {
    process: (args: z.infer<T>) => void;
    description: string;
    category?: string;
    aliases: string[];
    flags: string[];
    args: T;
};
/**
 * Metadata extracted from a Zod schema for UI purposes.
 */
export type ArgMetadata = {
    name: string;
    type: "string" | "number" | "enum" | "boolean";
    required: boolean;
    options?: string[];
    defaultValue?: string | number | boolean;
};
/**
 * Schema for commands that take a free-form string input.
 * Use this for commands that need the raw rest string.
 */
export declare const restArgsSchema: z.ZodObject<{
    rest: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    rest?: string;
}, {
    rest?: string;
}>;
/**
 * A network interceptor that gives flexible control over the chat feature of
 * the game. This also allows for custom commands to be added.
 *
 * # Example
 * ```ts
 * const chat = new VOXELIZE.Chat();
 *
 * // Listen to incoming chat messages.
 * chat.onChat = (chat: ChatMessage) => {
 *   console.log(chat);
 * };
 *
 * // Sending a chat message.
 * chat.send({
 *   type: "CLIENT",
 *   sender: "Mr. Robot",
 *   body: "Hello world!",
 * });
 *
 * // Register to the network.
 * network.register(chat);
 * ```
 *
 * ![Chat](/img/docs/chat.png)
 *
 * @category Core
 */
export declare class Chat<T extends ChatProtocol = ChatProtocol> implements NetIntercept {
    /**
     * A list of commands added by `addCommand`.
     */
    private commands;
    /**
     * An array of network packets that will be sent on `network.flush` calls.
     *
     * @hidden
     */
    packets: MessageProtocol[];
    /**
     * The symbol that is used to trigger commands.
     */
    private _commandSymbol;
    private _commandSymbolCode;
    private fallbackCommand;
    /**
     * Send a chat to the server.
     *
     * @param chat The chat message to send.
     */
    send(chat: T): void;
    private parseArgs;
    private formatCommandError;
    onChat: (chat: T) => void;
    private static readonly emptySchema;
    /**
     * Add a command to the chat system. Commands are case sensitive.
     *
     * @param trigger - The text to trigger the command, needs to be one single word without spaces.
     * @param process - The process run when this command is triggered, receives parsed typed args.
     * @param options - Configuration for the command including Zod schema for args.
     */
    addCommand<T extends ZodObject<Record<string, ZodTypeAny>> = ZodObject<Record<string, never>>>(trigger: string, process: (args: z.infer<T>) => void, options: CommandOptions<T>): () => void;
    /**
     * Remove a command from the chat system. Case sensitive.
     *
     * @param trigger - The trigger to remove.
     */
    removeCommand(trigger: string): boolean;
    /**
     * The network intercept implementation for chats.
     *
     * DO NOT CALL THIS METHOD OR CHANGE IT UNLESS YOU KNOW WHAT YOU ARE DOING.
     *
     * @hidden
     * @param message The message to intercept.
     */
    onMessage: (message: MessageProtocol) => void;
    /**
     * The symbol that is used to trigger commands.
     */
    get commandSymbol(): string;
    get commandSymbolCode(): string;
    /**
     * Set a fallback command to be executed when no matching command is found.
     *
     * @param fallback - The fallback command processor.
     */
    setFallbackCommand(fallback: (rest: string) => void): void;
    private isOptionalSchema;
    private isEnumSchema;
    private isNumberSchema;
    private isBooleanSchema;
    private hasDefault;
    private getDefaultValue;
    private extractArgMetadata;
    /**
     * Get all registered commands with their documentation.
     * This filters out aliases and returns only the primary command triggers.
     *
     * @returns An array of command triggers with their descriptions, categories, aliases, and arg schemas.
     */
    getAllCommands(): Array<{
        trigger: string;
        description: string;
        category?: string;
        aliases: string[];
        flags: string[];
        args: ArgMetadata[];
    }>;
}
//# sourceMappingURL=chat.d.ts.map