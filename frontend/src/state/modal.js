import createState from 'react-copy-write'

const initialState = { open: false, title: '', content: ''};

export const {
    Provider,
    Consumer,
    createSelector,
    mutate
  } = createState(initialState);

export const ModalActions = {
    openModal:  () => mutate((state) => ({...state, open: true})),
    closeModal:  () => mutate((state) => ({...state, open: false})),
    set:  (data) => mutate((state) => ({...state, ...data}))
}
