type formData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const location = useLocation<LocationState>();

    const { from } = location.state || { from: { pathname: '/movies' } };

    const { setAuthContextData } = useContext(AuthContext);

    const [hasError, setHasError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const history = useHistory();

    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
        .then((response) => {
            saveAuthData(response.data);
            setHasError(false);
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData(),
            });
            history.replace(from);
        })
        .catch((error) => {
            setHasError(true);
            console.log('Erro', error);
        });
    };

    return (
        
    )
} 