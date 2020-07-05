import React from 'react';
import {
  Chat,
  Channel,
  ChannelHeader,
  Thread,
  Window,
} from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('5mnfjhzzae7b');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYWdlZC1nbGl0dGVyLTEifQ.kp5nY46JUBG0vSMeMbBCMJ_Z17WDBmYEQhV2UI6_bww';

chatClient.setUser(
  {
    id: 'aged-glitter-1',
    name: 'Amanda Garcia',
    image:
      'https://getstream.io/random_svg/?id=aged-glitter-1&name=Aged+glitter',
  },
  userToken,
);

const channel = chatClient.channel('messaging', '84977', {
  // add as many custom fields as you'd like
  image: 'https://i.imgur.com/wCo76ZX.png',
  name: 'Assistente Meli',
});

const WhatsappChat = () => (
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default WhatsappChat;
