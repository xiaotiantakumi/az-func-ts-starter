import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { getAll } from "../db-service/sampleTableService";
import { getInitializedAppDataSource } from "../db-service/appDataSource";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const appDataSource = await getInitializedAppDataSource();
  const samples = await getAll(appDataSource);
  context.res = {
    status: 200,
    body: samples,
  };
};

export default httpTrigger;
