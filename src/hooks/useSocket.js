import { useEffect } from "react";

export const useSocket = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    console.log("socket", socket);

    socket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
    });

    socket.addEventListener("message", (event) => {
      const message = event.data;
      console.log(`Received message: ${message}`);

      // 在这里处理接收到的消息
    });

    socket.addEventListener("close", () => {
      console.log("Disconnected from WebSocket server");
    });

    // 发送消息到服务器
    function sendMessage(message) {
      socket.send(message);
    }
  }, []);
};
