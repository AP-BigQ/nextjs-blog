

import { useCookies } from 'react-cookie';

import { useRouter } from 'next/navigation';


export default function DismissButton(){
    const [cookies, setCookie] = useCookies(['banner']);
    const router = useRouter();

    return (
        <button
        className="contents underline text-blue-600"
        onClick={() => {
            setCookie('banner', 'true');
          router.refresh();
        }}
      >
        Dismiss →
      </button>
    )

}