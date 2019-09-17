import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WsException, WsResponse } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class LocationGateway implements OnGatewayConnection {
  @SubscribeMessage('connection')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  handleConnection(socket: Socket): any {
    // Some auth logic
    console.log('Connected');
    socket.emit('error', 'un-authorized');
    socket.disconnect(true);
    // throw new WsException('un-authorized');
  }
}
