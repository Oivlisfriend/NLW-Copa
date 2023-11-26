import { Center, Text, Icon } from 'native-base';
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button';
import { Fontisto } from '@expo/vector-icons'
import { useAuth } from '../hooks/userAuth';
export function SignIn() {
    const { signIn } = useAuth();
    return (
        <Center flex={1} bgColor="gray.900">
            <Logo width={212} height={40} />
            <Button
                title='ENTRAR COM GOOGLE'
                leftIcon={<Icon as={Fontisto} name='google' color="white" size="md" />}
                type='SECONDARY'
                mt={12}
                onPress={signIn}
            />
            <Text
                color="white"
                textAlign="center"
                mt={4}
            >
                Não utilizamos nenhuma informação além {'\n'}
                do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}