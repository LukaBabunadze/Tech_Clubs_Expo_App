import { Redirect } from "expo-router"


const index = () => {
  return (
   <Redirect href={"/(tabs)/products"}/>
  )
}

export default index