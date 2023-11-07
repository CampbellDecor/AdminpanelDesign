import React from 'react'
import AuthContext from './AuthContext';
import AppContext from './AppContext'
import ThemeContext from './ThemeContext'
import UIContext from './UiContext'
import UserContext from './UserContext'
import ChatContext from './ChatContext';


export default function CambellContextProvider ({ childern }) {
    return (
        <ThemeContext
            childern={
                <AppContext
                    childern={<UIContext
                        childern={<AuthContext
                            childern={<UserContext
                                childern={
                                    <ChatContext
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
                     }
        />
  )
}
