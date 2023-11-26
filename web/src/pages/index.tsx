
import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png'
import logo from '../assets/logo.svg'
import userAvatarExample from '../assets/users-avatar-example.png'
import iconCheckImg from '../assets/icon-check.svg'
import { api } from '../lib/axios';
import { FormEvent, useState } from 'react';


interface HomeProps {
    poolCount: number;
    guessCount: number;
    userCount: number;
}

export default function Home(props: HomeProps) {
    const [poolTitle, setPoolTitle] = useState('');
   /* const CreatePool = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const response = await api.post('/pools', {
                title: poolTitle
            });

            const { code } = response.data;

            await navigator.clipboard.writeText(code);

            alert("Bolão criado com sucesso, o código foi copiado para a área de transferência!")
            setPoolTitle('');
        } catch (error) {
            console.log(error)
            alert("Falha ao criar o bolão, tente novamente")
        }
    }*/
    return (
        <div className='max-w-[1124px] gap-28 h-screen mx-auto grid grid-cols-2 items-center'>
            <main>
                <Image src={logo} alt="NLW Copa" />
                <h1 className='mt-14 text-white text-4xl font-bold leading-tight'>Crie seu próprio bolão da copa e compartilhe entre amigos</h1>
                <div className='mt-10 flex items-center gap-2'>
                    <Image src={userAvatarExample} alt="" />
                    <strong className="text-gray-100 text-xl">
                        <span className="text-ignite-500"> +1 024{/*props.userCount*/}</span> pessoas já estão usando
                    </strong>
                </div>
                <form  className='mt-10 flex gap-2'>
                    <input
                        className="flex-1 text-gray-100 px-6 py-4 rounded bg-gray-800 border-gray-600 text-sm"
                        type="text"
                        name=""
                        id=""
                        value={poolTitle}
                        
                        required
                        placeholder='Qual é o nome do seu bolão?'
                    />
                    <button
                        type="submit"
                        className='bg-yellow-500 px-6 py-4 rounded font-bold text-gray-900 text-sm uppercase hover:bg-yellow-700'
                    >
                        Criar o meu bolão
                    </button>
                </form>
                <p className='mt-4 leading-relaxed text-sm text-gray-300'>Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀</p>
                <div className='mt-10 pt-10 border-t border-gray-600 flex justify-between items-center text-gray-100'>
                    <div className='flex items-center gap-6'>
                        <Image src={iconCheckImg} alt='' />
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl'>+1 453{/*props.poolCount*/}</span>
                            <span>Bolões criados</span>
                        </div>
                    </div>
                    <div className='w-px h-14 bg-gray-600' />
                    <div className='flex items-center gap-6'>
                        <Image src={iconCheckImg} alt='' />
                        <div className='flex flex-col'>
                            <span className='font-bold text-2xl'>+1 234{/*props.guessCount*/}</span>
                            <span>Palpites enviados</span>
                        </div>
                    </div>
                </div>
            </main>
            <Image
                src={appPreviewImg}
                alt="Dois celulares exibindo um prévia da aplicação móvel do NLW Copa"
                quality={100} />
        </div>

    )
}

/*export const getServerSideProps = async () => {
    const [
        poolCountResponse,
        guessCountResponse,
        userCountResponse] =
        await Promise.all([
            api.get('pools/count'),
            api.get('guesses/count'),
            api.get('users/count')
        ]);
    return {
        props: {
            poolCount: poolCountResponse.data.count,
            guessCount: guessCountResponse.data.count,
            userCount: userCountResponse.data.count
        }
    }
}*/
