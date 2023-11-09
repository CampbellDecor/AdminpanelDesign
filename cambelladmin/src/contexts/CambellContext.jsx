import React from 'react'
import AuthContext from './AuthContext';
import AppContext from './AppContext'
import ThemeContext from './ThemeContext'
import UIContext from './UiContext'
import UserContext from './UserContext'



export default function CambellContextProvider ({ childern }) {
    return (
        <ThemeContext
            childern={
                <AppContext
                    childern={<UIContext
                        childern={<AuthContext
                            childern={<UserContext
                                childern={

                                            childern

                                }
                                />
                            }
                        />
                        }
                    />
                            }
                />
                     }
        />
  )
}
