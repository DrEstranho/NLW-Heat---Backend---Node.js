import { serverHttp } from "./app";

serverHttp.listen(4000, () =>
    console.log(`🚀  Estamos conectado!`)
);