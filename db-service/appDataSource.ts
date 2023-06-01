import { DataSource } from "typeorm";

const entityPath: string = process.env.ENTITY_PATH ?? "dist/entity/*.js";
const appDataSource: DataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [entityPath],
  migrations: [],
  subscribers: [],
});

export const getInitializedAppDataSource = async () => {
  await setUp();
  return appDataSource;
};

const setUp = async () => {
  if (appDataSource.isInitialized) {
    return;
  }
  await appDataSource.initialize().catch((error) => {
    console.log(error);
  });
};
export const destroy = async () => {
  // destroyを呼び出さないことでコネクションの解放が行われない可能性がありますが、現状こうしないといけなそう。
  // 理由としては、Invocation IDがHttpトリガーのエンドポイントで一意とならなかったため。
  // このため、別エンドポイントとConnectionが混じり、あるエンドポイントでのdestroyによって他のエンドポイントで接続しようとして
  // Connectionがないというエラーになっていた。以下コメントアウトを解除した上で複数エンドポイント実行のログを確認し
  // Invocation IDが混在していないか検証してください。以下記事が関係しているかもしれない。
  // https://learn.microsoft.com/en-us/answers/questions/780257/azure-function-logs-mixing-34invocation-id34-with.html
  // if (!appDataSource.isInitialized) return;
  // await appDataSource.destroy().catch((error) => {
  //   logger?.error(error, "AppDataSource.destroy");
  // });
};
