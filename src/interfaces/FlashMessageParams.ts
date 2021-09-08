interface IFlashMessageParams {
   type: "error" | "info" | "success" | "warning";
   message: string;
}

export default IFlashMessageParams;
