import { io } from 'socket.io-client'

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    }

    return io('http://192.168.29.192:3001', options);
}
