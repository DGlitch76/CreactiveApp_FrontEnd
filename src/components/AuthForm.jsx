import { TextInput,Center, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';


const AuthForm = ({username, password, email, setUsername, setPassword, setEmail, handleSubmit, isLogin = false}) => {
    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });    
    const submitCallback = event => {
        event.preventDefault()
        handleSubmit()
       }
    return (
        <>
        
        <Box 
          style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 'auto'
  }}
        >

        <form onSubmit={submitCallback}>
          <TextInput
            withAsterisk
            label="Username"
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
            
          />
          {!isLogin && (
            <TextInput
              withAsterisk
              label="Email"
              type='email'
              placeholder="your@email.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          )}
          <TextInput
            withAsterisk
            label="Password"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
          <Group position="right" mt="md">
            <Button type="submit" style={{backgroundColor:"#1EDFFD" }}>{isLogin ? 'Login' : 'SignUp'}</Button>
          </Group>
        </form>
      </Box>
      
        {/* <form onSubmit={submitCallback}>
            <label>
                Username
                <input type='text' 
                       value={username} 
                       onChange={event => setUsername(event.target.value)} 
                />
            </label>
            {!isLogin && (
                <label>
                    Email
                    <input type='text' 
                           value={email} 
                           onChange={event => setEmail(event.target.value)} 
                    />
                </label>
            )}
            <label>
                Password
                <input type='password' 
                       value={password} 
                       onChange={event => setPassword(event.target.value)} 
                />
            </label>
            <button type='submit'>{isLogin ? 'Login' : 'SignUp'}</button>
        </form> */}
        </>
    )
}

export default AuthForm;