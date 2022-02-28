import dynamic from 'next/dynamic'
import ThirdParty from 'supertokens-auth-react/recipe/thirdparty'
// import ProtectedPage from "./protectedPage";

const ThirdPartyAuthNoSSR = dynamic(
    new Promise((res) =>
      res(ThirdParty.ThirdPartyAuth)
    ),
    { ssr: false }
  )

export default function demoPage() {
    return (
        <ThirdPartyAuthNoSSR>
            <div>Hello user, I am a Protected Page. If you can see me. You must be logged in</div>
        </ThirdPartyAuthNoSSR>
    )
}