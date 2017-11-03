import React from "react"
import TransitionGroup from "react-transition-group/TransitionGroup"
import Example from "components/core/examples/example/Example"
import PropTypes from "prop-types"
import Item from "./Item"

const words = [
  "cosmiquement", "chauffeur", "bluffer", "frénésie", "sans", "avenir", "pilote", "automatique", "manifeste", "eyetooth", "désobéir", "phonographe",
  "machine", "foi", "muscle", "babouin", "coup", "de", "chaleur", "gifler", "martèlement", "le", "plus", "grand", "contrebandier", "jour",
  "éprouvé", "fermer", "appartenir", "dominant", "détestable", "virtuel", "décennie", "contractuel", "prophétique", "archer",
  "erreur", "ambition", "du", "sang", "industrie", "cri", "crabes", "la", "source", "béton", "hôpital", "reine",
  "six", "alphabet", "exportation", "guide", "bacon", "vérité", "balle", "corrélation", "dogtooth", "impulsion",
  "concert", "chaleur", "positif", "coïncidence", "exposer", "code", "pluviosité", "cerceau", "plus", "sexy", "minimal",
  "ballet", "bête", "carnivore", "caresse", "gant", "orange", "privilège", "basket", "antilope", "attitude",
]

const MAX_ITEMS = 4

class AnimationList extends React.Component {
  state = {
    items: [],
  }

  componentWillMount() {
    this.int = setInterval(() => {
      this.updateItems()
    }, 5000)

    const newItems = this.addItem(this.state.items.slice(), MAX_ITEMS)
    this.setState({
      items: newItems,
    })
  }

  componentWillUnmount() {
    clearInterval(this.int)
  }

  makeid() {
    let text = ""
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  
    for (let i = 0; i < 2; i++) {
      text = text + possible.charAt(Math.floor(Math.random() * possible.length))
    }
  
    return text
  }

  addItem(arr, nb) {
    for (let i = nb; i > 0; i--) {
      const id = Math.floor(Math.random() * words.length)
      const word = words[id]
      if (!arr.includes(word)) {
        arr.push(word)
      }
    }

    return arr
  }

  updateItems() {
    // const nbRand = Math.floor(Math.random() * 11)
    const newItems = this.state.items.slice()
    const nb = 2

    // remove 3 random items
    for (let i = nb; i >= 0; i--) {
      newItems.splice(Math.floor(Math.random() * newItems.length), 1)
    }
    
    this.setState({
      items: this.addItem(newItems, MAX_ITEMS - newItems.length),
    })
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <TransitionGroup>
          {
            this.state.items.map((item, index) => (
              <Item key={ `item_${item}` } index={ index }>{item}</Item>
            ))
          }
        </TransitionGroup>
      </Example>
    
    )
  }
}


AnimationList.defaultProps = {}
AnimationList.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AnimationList
