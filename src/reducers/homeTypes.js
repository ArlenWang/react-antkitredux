const initialAuthState = { isFromNet:true,homeroutes: []};

const homeTypes = (state = initialAuthState, action)  => {
  switch (action.type) {
    case 'Home_Type':
     let data=action.datatypes;
      if(data&&data['result']==='success'){
        return { ...state, homeroutes:data};
      }else{
        return state;
      }
    case 'Home_Type_Erro':
    console.log(action);
    return state;
    case 'HT_From_Store':
      return { ...state, isFromNet: false };
    case 'HT_From_Net':
    return { ...state, isFromNet: true };
    default:
      return state;
  }
}

export default homeTypes