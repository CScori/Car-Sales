import { ADD_FEATURE, REMOVE_LIST } from '../actions/index'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    add: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };



export const carReducer = (state = initialState, action) => {
    console.log("in the reducer", action, state);
    switch (action.type) {
        case ADD_FEATURE:
            console.log('reducer state', state.car.features)
            console.log('payload', action.payload.id)
            return {
                ...state,
                car: {
                    ...state.car,
                    price: state.car.price + action.payload.price,
                    features: [...state.car.features, action.payload]
                },
                add: state.add.filter(item => {
                    return item.id !== action.payload.id;
                })
            };
            case REMOVE_LIST:
                    return {
                        ...state,
                        car: {
                            ...state.car,
                            price: state.car.price - action.payload.price,
                            features: state.car.features.filter(
                                ({ id }) =>
                                    ![
                                        ...state.add.map(({ id }) => id),
                                        action.payload.id
                                    ].includes(id)
                            )
                        },
                        store: [...state.store, action.payload]
                    };
                default:
                    return state;
            }
        }