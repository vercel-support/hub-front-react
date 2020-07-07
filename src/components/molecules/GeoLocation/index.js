import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ExpandLess, ExpandMore, MyLocation, Room } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { requestGeocode } from "../../../services";
import { store } from "../../../store";
import { DropDown } from "../../atoms";
import GeoLocationStyled, {
  GeoLocationCurrentStyled,
  GeoLocationFormStyled,
  GeoLocationListStyled,
  GeoLocationStoreStyled,
  GeoLocationTriggerStyled,
} from "./styles";

const listStores = [
  {
    title: "Petland Campolim",
    address: "Avenida Carlos Antonio Committre, 160 - Loja 2 - Sorocaba/SP",
    current: true,
  },
  {
    title: "Petland Higienópolis",
    address: "Avenida Carlos Antonio Committre, 160 - São Paulo/SP",
    current: false,
  },
  {
    title: "Petland Benjamim Constance",
    address:
      "Avenida Carlos Antonio Committre, 160 - Loja 2 - São José do Rio Preto/SP",
    current: false,
  },
];

const GeoLocation = () => {
  const { state } = useContext(store);
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  const getGeo = async () => {
    const response = await requestGeocode(geo.latitude, geo.longitude);

    if (!response) return null;

    const { road, suburb, city, state, postcode } = response.components;
  };

  useEffect(() => {
    console.log(state);
    // if (!geo) return;
    // getGeo();
  }, [state]);

  return (
    <GeoLocationStyled
      onClick={() => setOpen(!open)}
      onMouseOut={() => setOpen(false)}
      onMouseOver={() => setOpen(true)}
    >
      <Room />
      <GeoLocationCurrentStyled>
        <span>minha loja</span>
        <p>PETLAND CAMPOLIM {open ? <ExpandLess /> : <ExpandMore />}</p>
      </GeoLocationCurrentStyled>
      <DropDown open={open}>
        <div>
          <GeoLocationTriggerStyled>
            <span>encontre sua loja</span>
            <p>
              <MyLocation /> usar minha localização
            </p>
          </GeoLocationTriggerStyled>

          <GeoLocationFormStyled onSubmit={handleSubmit(onSubmit)}>
            <TextField
              name="cep"
              label="CEP"
              defaultValue="12345-123"
              variant="outlined"
              ref={register}
            />
            <Button variant="outlined" color="primary">
              Buscar
            </Button>
          </GeoLocationFormStyled>

          <GeoLocationListStyled>
            {listStores.map((store, i) => {
              const { address, current, title } = store;
              return (
                <GeoLocationStoreStyled selected={current} key={i}>
                  <h4>{title}</h4>
                  <p>{address}</p>
                  <span>
                    ({current ? "minha loja" : "alterar para essa loja"})
                  </span>
                </GeoLocationStoreStyled>
              );
            })}
          </GeoLocationListStyled>
        </div>
      </DropDown>
    </GeoLocationStyled>
  );
};

export default GeoLocation;
