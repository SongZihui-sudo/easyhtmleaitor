/**
 * author: 宋子慧
 * date: 2022-3-10
 * about:关于web socket客户端
 */
function Websocket_(message){
  // 初始化一个 WebSocket 对象
  var ws = new WebSocket('ws://127.0.0.1:8080');
// 建立 web socket 连接成功触发事件
  ws.onopen = function() {
    // 使用 send() 方法发送数据
    ws.send(message);
    console.log('数据发送中...');
};
  // 接收服务端数据时触发事件
  ws.onmessage = function(evt) {
    var received_msg = evt.data;
    console.log('数据已接收...'+received_msg);
};
  return ws;
}
function close(ws){
    ws.close() = function(){
      console.log('from client:close!!!');
  }
  return 0;
}
