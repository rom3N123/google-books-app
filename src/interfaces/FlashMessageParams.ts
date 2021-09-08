interface IFlashMessageParams {
   type: "error" | "info" | "success" | "warning";
   message: string;
   errorCode?: number;
}

export default IFlashMessageParams;
