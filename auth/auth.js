
import React from 'react'
import cookie from "js-cookie"
import Home from '../pages/index'
/*import Home from "../pages/index"
const Auth = (WrappedComponent) => {
    return (props)=>{
        const router = useRouter()
        const [state,setState]=React.useState(false)
            React.useEffect(()=>{
                if(localStorage.getItem("token")){
                    setState(false)
                }else{
                    setState(true)
                }
            })
            if(state){
              return <Home/>
            }
             return <WrappedComponent {...props}/>
                    
                
            
  
    }
    

}

export default Auth
*/

const  Auth = (WrappedComponent) => {
    const  higher=(props)=>props.token?<WrappedComponent {...props}/>:<Home></Home>
    higher.getInitialProps = async ({req,res}) => {
      console.log(req)
      return req.cookies.token?{token:true}:{token:false}
    }
    return higher;

}
export default Auth

  
 /*
const Auth = (AuthComponent) => {
    return class Higher extends React.Component {
      static async getserversideprops(ctx) {
        console.log(ctx)
        const pageProps =AuthComponent.getInitialProps && (await AuthComponent.getInitialProps(ctx))
        // Return props.
        return { ...pageProps }
      }
  
      render() {
        return <AuthComponent {...this.props} />;
      }
    };
  };
  export default Auth;*/
  /*
  const withAuth = (WrappedComponent) => {
  
    const FuncComponent = ({ children, ...props }) => {
      const { user, setUser } = useGlobalState(); 
  
      useEffect(() => {
        if (!user && props.user && props.account) 
          setUser(props.user, props.account);
      });
  
      return (<WrappedComponent {...props}>{children}</WrappedComponent>);
    };
  
    FuncComponent.getInitialProps = async (ctx) => {
      // If Page/Component has a `getInitialProps`, we should call it.
      const props = WrappedComponent.getInitialProps && await WrappedComponent.getInitialProps(ctx);
  
      if (ctx && ctx.req) {
        let cookies = new Cookies(ctx.req?.headers?.cookie);
        if (cookies.get('secret_token')) {
          const res = await getStatus(ctx.req.headers.cookie);
          if (res.success) {
            const account = await getAccount(ctx.req.headers.cookie);
            return { ...props, user: res.user, account: account };
          }
        }
      }
      return { ...props, user: null };
    }
  
    return FuncComponent;
  }
  
  export default withAuth;
  */