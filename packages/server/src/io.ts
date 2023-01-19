import server from "./server";

const { io } = server.get();

io.on("connection", (socket) => {
  console.log("new user");
});
