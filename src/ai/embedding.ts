import { logger } from "../lib/logger";

export async function embed(text: string): Promise<Float32Array> {
  logger.debug(text)
  return new Float32Array();
}