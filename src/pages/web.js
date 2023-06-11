import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

export default function Web() {
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((localStream) => {
        console.log("localStream 00000", localStream);
        // 創建本地視訊元素，並將本地媒體流綁定到元素
        const localVideo = document.createElement("video");
        localVideo.srcObject = localStream;
        localVideo.autoplay = true;
        document.body.appendChild(localVideo);

        // 創建RTCPeerConnection對象
        const peerConnection = new RTCPeerConnection();

        // 添加本地媒體流到RTCPeerConnection
        localStream.getTracks().forEach((track) => {
          console.log("track 11111", track);
          peerConnection.addTrack(track, localStream);
        });

        // 創建遠端視訊元素
        const remoteVideo = document.createElement("video");
        remoteVideo.autoplay = true;
        document.body.appendChild(remoteVideo);

        // 接收遠端媒體流
        peerConnection.ontrack = (event) => {
          const remoteStream = event.streams[0];
          remoteVideo.srcObject = remoteStream;
        };

        // 創建SDP交換
        peerConnection
          .createOffer()
          .then((offer) => peerConnection.setLocalDescription(offer))
          .then(() => {
            // 將本地SDP交換信息發送給遠端
            const localDescription = peerConnection.localDescription;
            // 透過信令服務將localDescription發送給遠端

            console.log("localDescription", localDescription);
          });

        // 接收遠端SDP交換信息
        // 透過信令服務接收遠端SDP交換信息
        // const remoteDescription = {}; // 從信令服務獲取遠端SDP交換信息

        // 設置遠端SDP交換信息
        // peerConnection
        //   .setRemoteDescription(remoteDescription)
        //   .then(() => {
        //     // 創建本地SDP交換信息
        //     return peerConnection.createAnswer();
        //   })
        //   .then((answer) => peerConnection.setLocalDescription(answer))
        //   .then(() => {
        //     // 將本地SDP交換信息發送給遠端
        //     const localDescription = peerConnection.localDescription;
        //     // 透過信令服務將localDescription發送給遠端
        //   });

        // 接收遠端ICE候選人
        // 透過信令服務接收遠端ICE候選人
        // const remoteCandidate = ...; // 從信令服務獲取遠端ICE候選人

        // 添加遠端ICE候選人到RTCPeerConnection
        // peerConnection.addIceCandidate(remoteCandidate);
      })
      .catch((error) => {
        console.error("發生錯誤：", error);
      });
  }, []);

  return <div className={cx("web")}> web</div>;
}
