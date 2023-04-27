import React, { FC, useEffect, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Product from '../../../models/Product';
import validation from './validation';
import styles from './AddProduct.module.scss';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import { addProduct as addProductAsync } from '../../../utils/fetch';
import { useAppDispatch } from '../../../hooks';
import { addProduct } from '../productsSlice';
import Alert from '../../Alert/Alert';


interface AddProductProps {
    onClose: () => void;
}

//curring

type User = {
    name: string;
    age: number;
}

const AddProduct: FC<AddProductProps> = ({ onClose }) => {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<User>({
        name: 'yogev',
        age: 35
    })
    const { register, handleSubmit, formState } = useForm<Product>();
    const [error, setError] = useState<any>(null);
    const [showError, setShowError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const prevStateRef = useRef<User>(user);
    let prevStateWithoutRef: User = user;

    // let isFirstRender = useRef(true);


    const submitProductHandler = (product: Product) => {
        addProductAsync(product).then((_product) => {
            dispatch(addProduct(product));
            // onAddProduct(_product);
            onClose();

        }).catch((err) => {
            setShowError(true);
            setError(err);
        });
    }


    // useEffect(() => {

    //     if (isFirstRender) {

    //         isFirstRender.current = false;

    //     } else {

    //     }



    //     console.log('first render')


    // }, []);

    // useEffect(() => {

    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //     }

    //     console.log('add product component useEffect', inputRef)
    // }, []);



    // useEffect(() => {

    //     const input = document.getElementById('input1');

    //     if (input) {
    //         input.focus();
    //     }

    //     console.log(input)


    //     console.log('add product component useEffect')
    // }, []);


    console.log('prevStateRef', prevStateRef)
    console.log('prevStateWithoutRef', prevStateWithoutRef)

    return (

        <Modal onClose={onClose}>
            {error && showError && <Alert error={'it seems that you are trying to do something...'} onClose={() => setShowError(false)} >
                <button onClick={() => {
                    window.location.reload();
                }}>refresh</button>
            </Alert>}

            <div className={styles.AddProduct}>
                <h2>Add Product</h2>

                <FormGroupWithError error={formState.errors.name?.message}      >
                    <label>Name:</label>
                    <input ref={inputRef} />
                    <button onClick={() => {
                        prevStateRef.current.age = 10;
                        setUser({
                            name: 'jhony',
                            age: 20
                        })
                    }}>user</button>
                </FormGroupWithError>


                <form onSubmit={handleSubmit(submitProductHandler)} >

                    <FormGroupWithError error={formState.errors.name?.message}      >
                        <label>Name:</label>
                        <input id="input1" type="text" {...register('name', validation.name)} />
                    </FormGroupWithError>

                    <FormGroupWithError error={formState.errors.price?.message}>
                        <label>Price::</label>
                        <input type="number"    {...register('price', validation.price)} />
                    </FormGroupWithError>

                    <FormGroupWithError error={formState.errors.stock?.message}>
                        <label>Stock:</label>
                        <input type="number" {...register('stock', validation.stock)} />
                    </FormGroupWithError>

                    <FormGroupWithError>
                        <label>Image:</label>
                        <input type="file" accept='image/*' {...register('image')} />
                    </FormGroupWithError>



                    <Button>Add</Button>

                </form>




            </div>
        </Modal>
    )
}



export default AddProduct;







