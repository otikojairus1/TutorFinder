import React from "react"
import { AlertDialog, Button, Center, NativeBaseProvider } from "native-base"



export default function AccountScreen ({navigation}){
    const [isOpen, setIsOpen] = React.useState(false)

    const onClose = () => {
        
      setIsOpen(false)
      navigation.navigate('signin')}
  
    const cancelRef = React.useRef(null)
    return (
      
        <Center flex={1} px="3">
          <Center>
      <Button colorScheme="danger" onPress={() => setIsOpen(!isOpen)}>
        Log Out
      </Button>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Sign Out?</AlertDialog.Header>
          <AlertDialog.Body>
            This will sign out all data relating to you. This action cannot be
            reversed.You will be required to re-enter your email and password the next time you'll need access to the account.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Sign Out!
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
        </Center>
      
    )
  }

