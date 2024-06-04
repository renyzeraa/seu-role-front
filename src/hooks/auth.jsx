import { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

/**
 * Componente de provedor de autenticação.
 *
 * Este componente fornece um contexto de autenticação que pode ser usado
 * para gerenciar o estado de autenticação e realizar operações relacionadas à autenticação.
 *
 * @param {object} children - Os componentes filho que serão envolvidos pelo provedor de autenticação.
 * @returns {JSX.Element} Um componente de provedor de autenticação.
 */
function AuthProvider({ children  }) {
  const [data, setData] = useState({})
  /**
   * Realiza o login no sistema
   * @param email    {String}
   * @param password {String}
   */
  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@seu_role:user', JSON.stringify(user))
      localStorage.setItem('@seu_role:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      console.log('Error ao logar', error)
    }
  }

  /**
   * Sai do sistema e limpa o local storage do login e token
   */
  function signOut() {
    localStorage.removeItem('@seu_role:user')
    localStorage.removeItem('@seu_role:token')
    setData({})
  }

  /**
   * Ao iniciar busca do localStorage os valores necessários para autenticar
   */
  useEffect(() => {
    const user = localStorage.getItem('@seu_role:user')
    const token = localStorage.getItem('@seu_role:token')
    if (user && token) {
      api.defaults.headers['Authorization'] = `Bearer ${token}`

      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Cria o contexto
 */
function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }
