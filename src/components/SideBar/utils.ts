import dayjs from "dayjs";

export const tagColorMap = ["magenta", "purple", "cyan"];

export const getDateInFormat = (timestamp: string | undefined) =>
  timestamp ? dayjs(timestamp).format("MMM DD, YYYY") : "";
