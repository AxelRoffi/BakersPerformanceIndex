import React, { Component } from 'react'
import ReactTable from "react-table"
import 'react-table/react-table.css'
import axios from 'axios'

// FILTER DETACHED FROM TABLE
// https://github.com/tannerlinsley/react-table/issues/944

class ReactTableTestDetached extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycle: [],
      bakers: [{
        bakerName: 'Hayek Lab',
        bakerKey: 'KT1E7dziiXMfhBMv6tMvUqe228RutbSZsWhF',
        bakerBalance: []
      },
      {
        bakerName: 'Staking Facilities',
        bakerKey: 'KT1WEjPiNrC8jbG1QmA7PhqeCgazkrZzbzF7',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Team',
        bakerKey: 'KT1XLpEytTnofSg6usdZ7HT7aMpHmVxARKLJ',
        bakerBalance: []
      },
      {
        bakerName: 'Tez Bros',
        bakerKey: 'KT1XJyo68fG6AgtZrNfMH53M9nw2c4Axg5Ho',
        bakerBalance: []
      },
      {
        bakerName: 'TzNode.io',
        bakerKey: 'KT1Xd96ewQJxiXavEgcgvCSwCq1cXuJXm6qp',
        bakerBalance: []
      },
      {
        bakerName: 'XTZ Antipodes',
        bakerKey: 'KT1WATcGdp45VAzLTvu4Hax3mddaVQcgKNpF',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Baker JP',
        bakerKey: 'KT1VyrpRFk5hyBR5tAcGDjqUzJWGr3o64ENr',
        bakerBalance: []
      },
      {
        bakerName: 'Tez Baking',
        bakerKey: 'KT1VSFcGqMWsfuvg2XJwJKUdLEfG2y1GAg9X',
        bakerBalance: []
      },
      {
        bakerName: 'Air Bie',
        bakerKey: 'KT1VoWv9fXLw5ELVbSZmMTwyu8YXiMZMDp6U',
        bakerBalance: []
      },

      {
        bakerName: 'You Loaf/We Bake',
        bakerKey: 'KT1TZSihD9nzDetN1amym6Un7DPoAfJ4hHgC',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Vote',
        bakerKey: 'KT1TMvyHZFVNvemN3JhoGSRUdmtxndB3Zwcf',
        bakerBalance: []
      },
      {
        bakerName: 'Norn Delegate',
        bakerKey: 'KT1SuzZHuVQtERu1JmGbpYZ6WTeNjusF7djR',
        bakerBalance: []
      },
      {
        bakerName: 'Crypto Delegate',
        bakerKey: 'KT1SJSgKe3APyKmC3nN3Hgvbn1YnhUzcGTNW',
        bakerBalance: []
      },
      {
        bakerName: 'Tz Dutch',
        bakerKey: 'KT1SFU2wsYNvg5whJHY8J6tYTkQhCzgkWj2J',
        bakerBalance: []
      },
      {
        bakerName: 'Tz Bank',
        bakerKey: 'KT1Sbd8bJSha3DaokqA7VZF5L3ksW54HgCU1',
        bakerBalance: []
      },

      {
        bakerName: 'Fresh Tezos',
        bakerKey: 'KT1RTZCTwUitaSnWUyCf8KKM5yzHb55JvpAo',
        bakerBalance: []
      },

      {
        bakerName: 'Yawong Baker',
        bakerKey: 'KT1RSVfUPuK7cVMTqLEvtkDhkBp95fALFBMu',
        bakerBalance: []
      },

      {
        bakerName: 'XTZ Black',
        bakerKey: 'KT1RqufZfL4dg5qqH9JjQ82QLtzSb9rZzYVQ',
        bakerBalance: [],
      },


      {
        bakerName: 'Tezos Baking Club',
        bakerKey: 'KT1Qhisf6cVwQFFjosBEn8CXD4rVruwd84Kp',
        bakerBalance: []
      },

      {
        bakerName: 'Cypher Baker',
        bakerKey: 'KT1Q8rrcbqMqncgeB53q9h8vstpR9Afh2i48',
        bakerBalance: [],
      },
      {
        bakerName: 'Cryptium Labs',
        bakerKey: 'KT1Q29FkvSCyAq7uoNX1HeQhqwsz9ybyxur5',
        bakerBalance: []
      },

      {
        bakerName: 'Staked',
        bakerKey: 'KT1PVBmthu7VpLtfxu2jKKP3kS6y8aaixFEj',
        bakerBalance: []
      },

      {
        bakerName: 'Tez Baker',
        bakerKey: 'KT1P1kp7nvZkq58guwXNEM2ebomiXSS8xR8M',
        bakerBalance: []
      },
      {
        bakerName: 'Bake Tz for Me',
        bakerKey: 'KT1NUCsorJJ7dxuwSc9hCdsN2njXVMeWpJBK',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Spanish',
        bakerKey: 'KT1Nm4hUPasz1rE7dW9f7q3DfyncfhiUijSP',
        bakerBalance: []
      },
      {
        bakerName: 'Just A Baker',
        bakerKey: 'KT1NDAzCRBYQNwytBWPJ9N9S7tDgkaKRXBaX',
        bakerBalance: [],
      },
      {
        bakerName: 'Tez Boss',
        bakerKey: 'KT1MXHicQLkrUMsTZpq9eGpSVgtmTRRZugUg',
        bakerBalance: []
      },
      {
        bakerName: 'First Block',
        bakerKey: 'KT1MvFLb2nAJXeE33zZVz9AL9ppczNN6VBGr',
        bakerBalance: []
      },
      {
        bakerName: 'TezeDele baker B',
        bakerKey: 'KT1MoXZHx9ppxcPnqcCny6qfX5QBDVuteh2k',
        bakerBalance: []
      },
      {
        bakerName: 'WeTez Wallet',
        bakerKey: 'KT1LyEmXCNUYfHJEmZahWq3CPtPaT4nsFEXb',
        bakerBalance: [],
      },
      {
        bakerName: 'TezosBC',
        bakerKey: 'KT1LT4GtBtzasTueoyCY2W9REHmv1PGTSctf',
        bakerBalance: []
      },
      {
        bakerName: 'Bakemon',
        bakerKey: 'KT1LsBLrUT2BJiRM2nRg1H6bM6fGSgbpBnjF',
        bakerBalance: []
      },
      {
        bakerName: 'HappyTezos',
        bakerKey: 'KT1LekS6HRBSpZbZfyM7ZoaWEdSB5Gytoyxt',
        bakerBalance: []
      },
      {
        bakerName: 'BakedTezos',
        bakerKey: 'KT1L86QoBJbvXbXCT3Aw9xmgsCyq64guvsqE',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezos Tokyo',
        bakerKey: 'KT1L626MZx3Lqocnifj7bTxE84S2qUAWA6BA',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Bakery',
        bakerKey: 'KT1Kq3ZJiWKRvY3FPFtTzKydgJBGewFZTgA2',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Mars',
        bakerKey: 'KT1KoAUEt9VCjypxWzSLhenfDg2oRW84yvjB',
        bakerBalance: []
      },
      {
        bakerName: 'TezMilk',
        bakerKey: 'KT1K39Ggi3RppawD3jPuEEVeMASwZhEoDJdM',
        bakerBalance: [],
      },
      {
        bakerName: 'TezosDelegate EU',
        bakerKey: 'KT1Jnmf5VwFR61UUm2oqNSXnMkh2JmUCWTSD',
        bakerBalance: []
      },
      {
        bakerName: 'Hyper Blocks Pro',
        bakerKey: 'KT1J5VsBD5hgLv4JzJU7VJcNKPe4Dxk7yvsv',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Chef',
        bakerKey: 'KT1Hx2eWwG6ctnnP8xMkqQyobh7qFjDqxzE9',
        bakerBalance: [],
      },
      {
        bakerName: 'TezosBR',
        bakerKey: 'KT1GfAodEW2KA9ABwMoUChDjnT6HqFYi4Y23',
        bakerBalance: []
      },
      {
        bakerName: 'Tz Scan Baker',
        bakerKey: 'KT1FyNmAMg4WNLqPXBtyqvDYwpQim9MqFgGC',
        bakerBalance: []
      },
      {
        bakerName: 'TzBakery',
        bakerKey: 'KT1FuxKUNqkFG4Q1CbqjzzFV1vrY2CKzZ5Tw',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezpatisserie',
        bakerKey: 'KT1FRWddjARNAXh5qHv6KgsGzLVNbtTjYej5',
        bakerBalance: []
      },
      {
        bakerName: 'TezDele Baker A',
        bakerKey: 'KT1FiQYYgUYS2H52CivV6KH3nYF8DkXHpHzC',
        bakerBalance: []
      },
      {
        bakerName: 'Tez Rocket',
        bakerKey: 'KT1FetPJtwGsmN6GmWpbRZjb6RKoGjopexxg',
        bakerBalance: [],
      },
      {
        bakerName: 'TzBakery',
        bakerKey: 'KT1FuxKUNqkFG4Q1CbqjzzFV1vrY2CKzZ5Tw',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezpatisserie',
        bakerKey: 'KT1FRWddjARNAXh5qHv6KgsGzLVNbtTjYej5',
        bakerBalance: []
      },
      {
        bakerName: 'TezDele Baker A',
        bakerKey: 'KT1FiQYYgUYS2H52CivV6KH3nYF8DkXHpHzC',
        bakerBalance: []
      },
      {
        bakerName: 'Tez Rocket',
        bakerKey: 'KT1FetPJtwGsmN6GmWpbRZjb6RKoGjopexxg',
        bakerBalance: [],
      },
      {
        bakerName: 'TezosNodeSpain',
        bakerKey: 'KT1FcKipDdsq6qbyUM4BH1KvLJQDch7Ka3CY',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezos Bakes',
        bakerKey: 'KT1Ew6YA3SbV77rLC9XBwDJBG5xPbbRwFAb5',
        bakerBalance: []
      },
      {
        bakerName: 'Zed Node',
        bakerKey: 'KT1Eji2DjivNGL1AF8BTpGXNpaJ9uv1HFidF',
        bakerBalance: []
      },
      {
        bakerName: 'CEIBO XTZ',
        bakerKey: 'KT1CPvvezdoS7kHXDMNF1Ynzr6cqQRUVPZmw',
        bakerBalance: [],
      },
      {
        bakerName: 'XTZ Delegate',
        bakerKey: 'KT1CeSpNrYiDy2tnXctD4WZfzgL4BM5A8HgV',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezetetic',
        bakerKey: 'KT1BYsFdxKQDx72HW3R5QyUVq8FCincVcBqp',
        bakerBalance: []
      },
      {
        bakerName: 'Tezos Suisse',
        bakerKey: 'KT1B4qQZegypKLhtBzVyXsFzGsg1zSJgayxD',
        bakerBalance: []
      },
      {
        bakerName: `Bake'N'Rolls`,
        bakerKey: 'KT1AX3HWxwMEhcrKnV9dpS8y4u2RAWsTidL4',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezos Hodl',
        bakerKey: 'KT19Dt9HKJWoJrduiTQgFwatsfkEuLNMQFcF',
        bakerBalance: []
      },
      {
        bakerName: 'TezosLand(XTZ LAND)',
        bakerKey: 'KT19cJWfbDNXT4azVbgTBvtLMeqweuHH8W2h',
        bakerBalance: []
      },
      {
        bakerName: `Stakery`,
        bakerKey: 'KT194JTZGnMLRP3Tz4Y1ZBX3JHp11HaPCHFL',
        bakerBalance: [],
      },
      {
        bakerName: 'Tezos Community',
        bakerKey: 'KT191fEfxTFt8fK6tH6i6pznfgce4aQD4xSA',
        bakerBalance: []
      },
      {
        bakerName: 'TEZZIGATOR',
        bakerKey: 'KT18fLJds1bKGkhAAEQk6PixWg48RwvJ9bUP',
        bakerBalance: [],
      },
      ],
      search: ''
    }
  }

  filterMethod = (filter, row, column) => {
    const id = filter.pivotId || filter.id
    return row[id] !== undefined ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
  }

  componentDidMount() {
    const url = `https://api5.tzscan.io/v3/balance_history/`
    const promises = this.state.bakers.map(element => axios.get((`${url}${element.bakerKey}`)))

    axios.all(promises)
      .then(axios.spread((resHayekLab, resStakingFacilities, resTezosTeam, resTezBros, resTzNodeIo, resXtzAntipodes, resTezosBakerJp, resTezBaking, resAirBie, resFYouLoafWeBake, resTezosVote, resNornDelegate, resCryptoDelegate, resTzDutch, resTzBank, resFreshTezos, resYawongBaker, resXtzBlack, resTezosBakingClub, resCypherBaker, resCryptiumLabs, resStaked, resTezBaker, resBakeTzForMe, resTezosSpanish, resJustABaker, resTezBoss, resFirstBlock, resTezeDeleBakerB, resWeTezWallet, resTezosBC, resBakemon, resHappyTezos, resBakedTezos, resTezosTokyo, resTezosBakery, resTezosMars, resTezMilk, resTezosDelegateEU, resHyperBlocksPro, resTezosChef, resTezosBR, resTzScanBaker, resTzBakery, resTezPatisserie, resTezDeleBakerA, resTezRocket, resTezosNodeSpain, resTezosBakes, resZedNode, resCeiboXtz, resXtzDelegate, resTezetetic, resTezosSuisse, resBakeNRolls, resTezosHodl, resTezosLand, resStakery, resTezosCommunity, resTezzigator) => {
        this.setState({
          cycle: resHayekLab.data.map(element => element.index),
          bakers: [{
            bakerName: 'Hayek Lab',
            bakerKey: 'KT1E7dziiXMfhBMv6tMvUqe228RutbSZsWhF',
            bakerBalance: resHayekLab.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Staking Facilities',
            bakerKey: 'KT1WEjPiNrC8jbG1QmA7PhqeCgazkrZzbzF7',
            bakerBalance: resStakingFacilities.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Team',
            bakerKey: 'KT1XLpEytTnofSg6usdZ7HT7aMpHmVxARKLJ',
            bakerBalance: resTezosTeam.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tez Bros',
            bakerKey: 'KT1XJyo68fG6AgtZrNfMH53M9nw2c4Axg5Ho',
            bakerBalance: resTezBros.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'TzNode.io',
            bakerKey: 'KT1Xd96ewQJxiXavEgcgvCSwCq1cXuJXm6qp',
            bakerBalance: resTzNodeIo.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'XTZ Antipodes',
            bakerKey: 'KT1WATcGdp45VAzLTvu4Hax3mddaVQcgKNpF',
            bakerBalance: resXtzAntipodes.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Baker JP',
            bakerKey: 'KT1VyrpRFk5hyBR5tAcGDjqUzJWGr3o64ENr',
            bakerBalance: resTezosBakerJp.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tez Baking',
            bakerKey: 'KT1VSFcGqMWsfuvg2XJwJKUdLEfG2y1GAg9X',
            bakerBalance: resTezBaking.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Air Bie',
            bakerKey: 'KT1VoWv9fXLw5ELVbSZmMTwyu8YXiMZMDp6U',
            bakerBalance: resAirBie.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'You Loaf/We Bake',
            bakerKey: 'KT1TZSihD9nzDetN1amym6Un7DPoAfJ4hHgC',
            bakerBalance: resFYouLoafWeBake.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Vote',
            bakerKey: 'KT1TMvyHZFVNvemN3JhoGSRUdmtxndB3Zwcf',
            bakerBalance: resTezosVote.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Norn Delegate',
            bakerKey: 'KT1SuzZHuVQtERu1JmGbpYZ6WTeNjusF7djR',
            bakerBalance: resNornDelegate.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Crypto Delegate',
            bakerKey: 'KT1SJSgKe3APyKmC3nN3Hgvbn1YnhUzcGTNW',
            bakerBalance: resCryptoDelegate.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tz Dutch',
            bakerKey: 'KT1SFU2wsYNvg5whJHY8J6tYTkQhCzgkWj2J',
            bakerBalance: resTzDutch.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tz Bank',
            bakerKey: 'KT1Sbd8bJSha3DaokqA7VZF5L3ksW54HgCU1',
            bakerBalance: resTzBank.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Fresh Tezos',
            bakerKey: 'KT1RTZCTwUitaSnWUyCf8KKM5yzHb55JvpAo',
            bakerBalance: resFreshTezos.data.map(element => element.balance.spendable)
          },

          {
            bakerName: 'Yawong Baker',
            bakerKey: 'KT1RSVfUPuK7cVMTqLEvtkDhkBp95fALFBMu',
            bakerBalance: resYawongBaker.data.map(element => element.balance.spendable)
          },

          {
            bakerName: 'XTZ Black',
            bakerKey: 'KT1RqufZfL4dg5qqH9JjQ82QLtzSb9rZzYVQ',
            bakerBalance: resXtzBlack.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Baking Club',
            bakerKey: 'KT1Qhisf6cVwQFFjosBEn8CXD4rVruwd84Kp',
            bakerBalance: resTezosBakingClub.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Cypher Baker',
            bakerKey: 'KT1Q8rrcbqMqncgeB53q9h8vstpR9Afh2i48',
            bakerBalance: resCypherBaker.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Cryptium Labs',
            bakerKey: 'KT1Q29FkvSCyAq7uoNX1HeQhqwsz9ybyxur5',
            bakerBalance: resCryptiumLabs.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Staked',
            bakerKey: 'KT1PVBmthu7VpLtfxu2jKKP3kS6y8aaixFEj',
            bakerBalance: resStaked.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tez Baker',
            bakerKey: 'KT1P1kp7nvZkq58guwXNEM2ebomiXSS8xR8M',
            bakerBalance: resTezBaker.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Bake Tz for Me',
            bakerKey: 'KT1NUCsorJJ7dxuwSc9hCdsN2njXVMeWpJBK',
            bakerBalance: resBakeTzForMe.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Spanish',
            bakerKey: 'KT1Nm4hUPasz1rE7dW9f7q3DfyncfhiUijSP',
            bakerBalance: resTezosSpanish.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Just A Baker',
            bakerKey: 'KT1NDAzCRBYQNwytBWPJ9N9S7tDgkaKRXBaX',
            bakerBalance: resJustABaker.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tez Boss',
            bakerKey: 'KT1MXHicQLkrUMsTZpq9eGpSVgtmTRRZugUg',
            bakerBalance: resTezBoss.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'First Block',
            bakerKey: 'KT1MvFLb2nAJXeE33zZVz9AL9ppczNN6VBGr',
            bakerBalance: resFirstBlock.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'TezeDele baker B',
            bakerKey: 'KT1MoXZHx9ppxcPnqcCny6qfX5QBDVuteh2k',
            bakerBalance: resTezeDeleBakerB.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'WeTez Wallet',
            bakerKey: 'KT1LyEmXCNUYfHJEmZahWq3CPtPaT4nsFEXb',
            bakerBalance: resWeTezWallet.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'TezosBC',
            bakerKey: 'KT1LT4GtBtzasTueoyCY2W9REHmv1PGTSctf',
            bakerBalance: resTezosBC.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Bakemon',
            bakerKey: 'KT1LsBLrUT2BJiRM2nRg1H6bM6fGSgbpBnjF',
            bakerBalance: resBakemon.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'HappyTezos',
            bakerKey: 'KT1LekS6HRBSpZbZfyM7ZoaWEdSB5Gytoyxt',
            bakerBalance: resHappyTezos.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'BakedTezos',
            bakerKey: 'KT1L86QoBJbvXbXCT3Aw9xmgsCyq64guvsqE',
            bakerBalance: resBakedTezos.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Tokyo',
            bakerKey: 'KT1L626MZx3Lqocnifj7bTxE84S2qUAWA6BA',
            bakerBalance: resTezosTokyo.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Bakery',
            bakerKey: 'KT1Kq3ZJiWKRvY3FPFtTzKydgJBGewFZTgA2',
            bakerBalance: resTezosBakery.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Mars',
            bakerKey: 'KT1KoAUEt9VCjypxWzSLhenfDg2oRW84yvjB',
            bakerBalance: resTezosMars.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'TezMilk',
            bakerKey: 'KT1K39Ggi3RppawD3jPuEEVeMASwZhEoDJdM',
            bakerBalance: resTezMilk.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'TezosDelegate EU',
            bakerKey: 'KT1Jnmf5VwFR61UUm2oqNSXnMkh2JmUCWTSD',
            bakerBalance: resTezosDelegateEU.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Hyper Blocks Pro',
            bakerKey: 'KT1J5VsBD5hgLv4JzJU7VJcNKPe4Dxk7yvsv',
            bakerBalance: resHyperBlocksPro.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Chef',
            bakerKey: 'KT1Hx2eWwG6ctnnP8xMkqQyobh7qFjDqxzE9',
            bakerBalance: resTezosChef.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'TezosBR',
            bakerKey: 'KT1GfAodEW2KA9ABwMoUChDjnT6HqFYi4Y23',
            bakerBalance: resTezosBR.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tz Scan Baker',
            bakerKey: 'KT1FyNmAMg4WNLqPXBtyqvDYwpQim9MqFgGC',
            bakerBalance: resTzScanBaker.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'TzBakery',
            bakerKey: 'KT1FuxKUNqkFG4Q1CbqjzzFV1vrY2CKzZ5Tw',
            bakerBalance: resTzBakery.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezpatisserie',
            bakerKey: 'KT1FRWddjARNAXh5qHv6KgsGzLVNbtTjYej5',
            bakerBalance: resTezPatisserie.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'TezDele Baker A',
            bakerKey: 'KT1FiQYYgUYS2H52CivV6KH3nYF8DkXHpHzC',
            bakerBalance: resTezDeleBakerA.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tez Rocket',
            bakerKey: 'KT1FetPJtwGsmN6GmWpbRZjb6RKoGjopexxg',
            bakerBalance: resTezRocket.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'TezosNodeSpain',
            bakerKey: 'KT1FcKipDdsq6qbyUM4BH1KvLJQDch7Ka3CY',
            bakerBalance: resTezosNodeSpain.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Bakes',
            bakerKey: 'KT1Ew6YA3SbV77rLC9XBwDJBG5xPbbRwFAb5',
            bakerBalance: resTezosBakes.data.map(element => element.balance.spendable)
          },


          {
            bakerName: 'Zed Node',
            bakerKey: 'KT1Eji2DjivNGL1AF8BTpGXNpaJ9uv1HFidF',
            bakerBalance: resZedNode.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'CEIBO XTZ',
            bakerKey: 'KT1CPvvezdoS7kHXDMNF1Ynzr6cqQRUVPZmw',
            bakerBalance: resCeiboXtz.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'XTZ Delegate',
            bakerKey: 'KT1CeSpNrYiDy2tnXctD4WZfzgL4BM5A8HgV',
            bakerBalance: resXtzDelegate.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezetetic',
            bakerKey: 'KT1BYsFdxKQDx72HW3R5QyUVq8FCincVcBqp',
            bakerBalance: resTezetetic.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezos Suisse',
            bakerKey: 'KT1B4qQZegypKLhtBzVyXsFzGsg1zSJgayxD',
            bakerBalance: resTezosSuisse.data.map(element => element.balance.spendable)
          },
          {
            bakerName: `Bake'N'Rolls`,
            bakerKey: 'KT1AX3HWxwMEhcrKnV9dpS8y4u2RAWsTidL4',
            bakerBalance: resBakeNRolls.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Hodl',
            bakerKey: 'KT19Dt9HKJWoJrduiTQgFwatsfkEuLNMQFcF',
            bakerBalance: resTezosHodl.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'TezosLand(XTZ LAND)',
            bakerKey: 'KT19cJWfbDNXT4azVbgTBvtLMeqweuHH8W2h',
            bakerBalance: resTezosLand.data.map(element => element.balance.spendable)
          },
          {
            bakerName: `Stakery`,
            bakerKey: 'KT194JTZGnMLRP3Tz4Y1ZBX3JHp11HaPCHFL',
            bakerBalance: resStakery.data.map(element => element.balance.spendable),
          },
          {
            bakerName: 'Tezos Community',
            bakerKey: 'KT191fEfxTFt8fK6tH6i6pznfgce4aQD4xSA',
            bakerBalance: resTezosCommunity.data.map(element => element.balance.spendable)
          },
          {
            bakerName: 'Tezzigator',
            bakerKey: 'KT18fLJds1bKGkhAAEQk6PixWg48RwvJ9bUP',
            bakerBalance: resTezzigator.data.map(element => element.balance.spendable),
          },
          ],
          search: ''


        })
      }))
  }

  render() {
    const cycle = this.state.cycle
    // const bakersNames = this.state.bakers.map(element => element.bakerName)
    //   this.state = {
    //     data: makeData(),
    //     search: ''
    //   }
    // }

    // const bakerNames = this.state.bakers.map(element => element.bakerName)
    // const bakerNameSearched = bakerNames.filter(element => element.bakerName = this.state.search)

    // if (this.state.search == bakerNameSearched) {
    //   return bakerNameSearched
    // }


    const allBakerData = (i) => {
      const baker = this.state.bakers[i]
      return {
        bakerName: this.state.bakers[i].bakerName,
        xtzDelegated: '10 ',
        rewardsFromCycle34ToCycleNMinus2: (((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3]) - (this.state.bakers[i].bakerBalance[2])) / 1000000).toFixed(3),
        rewardsCycleNMinus1: (((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2]) - (this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3])) / 1000000).toFixed(4),
        rewardsCycleN: (((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 1]) - (this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2])) / 1000000).toFixed(4),
        balanceAtCycleNMinus2: (((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3])) / 1000000).toFixed(3),
        balanceAtCycleNMinus1: ((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2]) / 1000000).toFixed(3),
        balanceAtCycleN: ((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 1]) / 1000000).toFixed(3),
        roiFromCycle34ToCycleNMinus2: `${((((((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3]) - (this.state.bakers[i].bakerBalance[2]))) / 10) * 100) / 1000000).toFixed(3)}%`,
        roiAtCycleNMinus1: `${(((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2] - ((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3]))) / ((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 3]))) * 100).toFixed(3)}%`,
        roiAtCycleN: `${(((this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 1] - this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2]) / this.state.bakers[i].bakerBalance[this.state.bakers[i].bakerBalance.length - 2]) * 100).toFixed(3)}%`
      }
    }

    //Columns
    const columns =
      [{
        Header: "",
        columns: [
          {
            Header: "Baker",
            filterable: true,
            accessor: "bakerName",
            width: 200,
            textAlign: 'left',
            Filter: ({ filter, onChange }) => (
              <input
                onChange={event => onChange(event.target.value)}
                value={filter ? filter.value : ''}
                placeholder='type in baking service'
              />
            ),

          },
          {
            Header: "ꜩ baked",
            accessor: "xtzDelegated",
            width: 75,
          }
        ]
      },
      {
        Header: `Cycle 34 -> ${cycle[cycle.length - 4]} `,
        columns: [
          {
            Header: "Rewards(ꜩ)",
            accessor: "rewardsFromCycle34ToCycleNMinus2"
          },
          {
            Header: "ROI(%)",
            accessor: "roiFromCycle34ToCycleNMinus2"
          },
          {
            Header: "Balance(ꜩ)",
            accessor: "balanceAtCycleNMinus2"
          }
        ]
      },
      {
        Header: `cycle ${cycle[cycle.length - 3]} `,
        columns: [
          {
            Header: "Rewards(ꜩ)",
            accessor: "rewardsCycleNMinus1"
          },
          {
            Header: "ROI(%)",
            accessor: "roiAtCycleNMinus1"
          },
          {
            Header: "Balance(ꜩ)",
            accessor: "balanceAtCycleNMinus1"
          }
        ]
      },
      {
        Header: `cycle ${cycle[cycle.length - 2]} `,
        columns: [
          {
            Header: "Rewards(ꜩ)",
            accessor: "rewardsCycleN"
          },
          {
            Header: "ROI(%)",
            accessor: "roiAtCycleN"
          },
          {
            Header: "Balance(ꜩ)",
            accessor: "balanceAtCycleN"
          }
        ]
      },
      ]

    const data = [allBakerData(0), allBakerData(1), allBakerData(2), allBakerData(3), allBakerData(4), allBakerData(5), allBakerData(6), allBakerData(7), allBakerData(8), allBakerData(9), allBakerData(10), allBakerData(11), allBakerData(12), allBakerData(13), allBakerData(14), allBakerData(15), allBakerData(16), allBakerData(17), allBakerData(18), allBakerData(19), allBakerData(20), allBakerData(21), allBakerData(22), allBakerData(23), allBakerData(24), allBakerData(25), allBakerData(26), allBakerData(27), allBakerData(28), allBakerData(29), allBakerData(30), allBakerData(31), allBakerData(32), allBakerData(33), allBakerData(34), allBakerData(35), allBakerData(36), allBakerData(37), allBakerData(38), allBakerData(39), allBakerData(40), allBakerData(41), allBakerData(42), allBakerData(43), allBakerData(44), allBakerData(45), allBakerData(46), allBakerData(47), allBakerData(48), allBakerData(49), allBakerData(50), allBakerData(51), allBakerData(52), allBakerData(53), allBakerData(54), allBakerData(55), allBakerData(56), allBakerData(57), allBakerData(58), allBakerData(59)];


    return (
      <div>
        <ReactTable
          columns={columns}
          data={data}
          defaultPageSize={this.state.bakers.length - 4}
          showPagination='false'
          showPageSizeOptions='false'
          showPageJump='false'
          showFilters='true'
          defaultFilterMethod={this.filterMethod}
        >
        </ReactTable>
      </div >
    )
  }
}

export default ReactTableTestDetached;
