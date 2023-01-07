import {Container} from '@mantine/core'

function Layout({children}) {
  return (
    <Container maxWidth="md">
      {children}
    </Container>
  )
}

export default Layout