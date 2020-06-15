import numpy as np
import pandas as pd
import pmdarima as pm
from sklearn.metrics import mean_squared_error,mean_absolute_error
from . helpers import create_train_test
import pickle
from datetime import datetime
import pandas as pd
from . engine_output_creation import engine_output_creation
from nbeats_keras.model import NBeatsNet




def anomaly_nbeats(lista_datos,num_fut,desv_mse=0,train=True,name='model-name'):
    lista_puntos = np.arange(0, len(lista_datos),1)
    df, df_train, df_test = create_train_test(lista_puntos, lista_datos)



    forecast_length = num_fut
    backcast_length = 12 * forecast_length
    batch_size = 5  # greater than 4 for viz


    #milk = saldos  # just keep np array here for simplicity.


    x_train_batch, y = [], []
    for i in range(backcast_length, len(lista_puntos) - forecast_length):
        x_train_batch.append(lista_puntos[i - backcast_length:i])
        y.append(lista_puntos[i:i + forecast_length])
        print (x_train_batch)

        #x_train_batch = np.array(x_train_batch)[..., 0]
        #y = np.array(y)[..., 0]

    x_train_batch = np.asarray(x_train_batch)
    y = np.asarray(y)

    c = int(len(x_train_batch) * 0.7)

    x_train, y_train = x_train_batch[:c], y[:c]
    x_test, y_test = x_train_batch[c:], y[c:]


    x_train = reshape_array(x_train)
    y_train = reshape_array(y_train)
    x_test = reshape_array(x_test)

    y_test = reshape_array(y_test)



    from nbeats_keras.model import NBeatsNet


    # Definition of the model.
    model = NBeatsNet(backcast_length=backcast_length, forecast_length=forecast_length,
                      stack_types=(NBeatsNet.GENERIC_BLOCK, NBeatsNet.GENERIC_BLOCK), share_weights_in_stack=True)


    # Definition of the objective function and the optimizer.
    model.compile_model(loss='mae', learning_rate=1e-5)


    # Train the model.
    model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=300, batch_size=128)

    predictions = model.predict(x_test)

    engine = engine_output_creation('nbeats')
    predict_output = []
    for elemento in np.arange(0,len(y_test)):
        predict_output.append(predictions[elemento,0,0])
    engine.alerts_creation(predict_output,df_test)
    engine.debug_creation(predict_output,df_test)
    engine.metrics_generation( df_test['valores'].values,predict_output)


        ############## ANOMALY FINISHED,
    print ("Anomaly finished. Start forecasting")
        ############## FORECAST START


    engine.forecast_creation( predictions2[len(y_test)-1].reshape(forecast_length).tolist(), len(lista_datos),num_fut)
    return (engine.engine_output)
