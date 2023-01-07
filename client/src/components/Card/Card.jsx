// function Card() {
//   return (
//     <div className='card'>
//         <div className="card-wrapper">
//             <h5 className="title">title</h5>
//             <h5 className="title">status</h5>
//             <h5 className="title">priority</h5>
//             <h5 className="title">Due Date</h5>
//             <h5 className="title">Assigned to: <span>Employee</span></h5>
//         </div>
//     </div>
//   )
// }

// export default Card


import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      p="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Text size="md" color="blue" weight={500} mt="md">title</Text>
        <Text size="md" color="blue" weight={500} mt="md">status</Text>
        <Text size="md" color="blue" weight={500} mt="md">priority</Text>
        <Text size="md" color="blue" weight={500} mt="md">due Date:</Text>
        <Text size="md" color="blue" weight={500} mt="md">assigned to:</Text>
      </Card.Section>
      <Text mt="xs" color="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}

export default Demo;