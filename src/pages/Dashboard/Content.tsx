import { FC, useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { Typography } from '../../elements/Typography';
import { Section, ChatThreadProps } from '../../interfaces';

import api from '../../services/restApi';
import { Button } from '../../elements/Button';

interface ListItemInterface {
  heading: string;
  content: string;
}

interface ChatThreadArr extends Array<ChatThreadProps> {}

const ListItem: FC<ListItemInterface> = ({ heading, content }) => {
  return (
    <div className="flex flex-col gap-3 border-t border-gray-200 py-5">
      <div className="flex items-center gap-4">
        <Typography value={heading} color="black" size="xl" tracking="tight" weight={6} />
        <Button
          value={<Typography value="START" color="blue" size="base" weight={5} />}
          extraClass="border-blue-900 border px-4 hover:bg-gray-100"
          color="white"
          size="sm"
        />
      </div>
      <Typography
        value={content}
        color="black"
        font="Poppins"
        tracking="tight"
        size="base"
        opacity={0.8}
      />
    </div>
  );
};

const Content = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [chatThreads, setChatThreads] = useState<ChatThreadArr>([]);

  useEffect(() => {
    const fetchData = async () => {
      const access_token = Cookies.get('access_token');
      if (access_token && chatThreads.length < 1) {
        try {
          // loading user's sections
          const responseSections = await api.users.sections();
          // Handle the successful response
          setSections(responseSections);
        } catch (error) {
          // Handle the error
          console.log(error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex border-t border-gray-200 my-10 h-full py-10 justify-center w-full ">
      <div className="w-[570px] px-10 flex flex-col gap-6">
        <Typography
          value="Welcome to Mila Ai "
          size="4xl"
          weight={9}
          align="center"
          color="black"
        />
        <Typography
          value="Start asking your questions, selecting the topic:"
          font="Poppins"
          size="lg"
          align="center"
        />

        <div className="flex flex-col gap-4">
          {sections?.map((section: Section, index: number) => (
            <ListItem
              key={index}
              heading={section.title}
              content={section.words_to_practice.join(', ')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
