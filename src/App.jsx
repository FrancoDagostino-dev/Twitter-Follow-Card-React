import { Children } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName:'midudev',
    isFollowing: true,
    name:'Miguel Angel Duran',
  },
  {
    userName:'soraclesenz',
    isFollowing: false,
    name:'Soracle',
  },
  {
    userName:'frandagos',
    isFollowing: false,
    name:'Fran Dagos',
  }
]

export function App () {
  return (
    <div className='App'>
      {
        users.map(user =>{
          const {userName, isFollowing, name} = user
          return (
            <TwitterFollowCard
            key={userName}
              userName={userName}
              IsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </div>
  )
}

