import dadosIniciais from '../../data/dados_iniciais.json';

const INITIAL_STATE = {
    currentVideo: {
        title: dadosIniciais.categorias[0].videos[0].titulo,
        description: '',
        url: dadosIniciais.categorias[0].videos[0].url
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_VIDEO':
            console.log(action.payload);
            return { ...state, currentVideo: { title: action.payload.videoTitle, url: action.payload.videoURL } };
        default:
            return state;
    }
}