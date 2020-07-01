import React, { useRef, useState } from "react";
import { withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import PrintIcon from "@material-ui/icons/Print";

const styles = () => ({
  root: {
    flexGrow: 1
  },
  primaryColor: {
    color: "#FFF",
  },
  secondaryColor: {
    color: "",
  },
  padding: {
    padding: 0,
  },
  mainHeader: {
    backgroundColor: "#f05a5b",
    padding: 40,
    alignItems: "center",
  },
  mainContent: {
    padding: 60,
  },
  secondaryContainer: {
    padding: "110px 25px",
    backgroundColor: "#f05a5b",
  },
  lineBreak: {
    marginTop: 30,
  },
  radio: {
    "&$checked": {
      color: "#4B8DF8",
    },
  },
  checked: {},
});

function WireInfo(props) {
  const { classes } = props;
  const ref = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const printPage = () => {
    const pri = document.getElementById("iframetoprint").contentWindow;
    pri.document.open();
    pri.document.write(document.head.innerHTML);
    pri.document.write(ref.current.innerHTML);
    pri.document.close();
    pri.focus();
    pri.print();
  };

  const [values, setValues] = useState({ name: "" });

  return (
    <Dialog className={classes.root} fullWidth maxWidth="md" open={true}>
      <div ref={ref}>
        <DialogContent className={classes.padding}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container direction="row" className={classes.mainHeader}>
                <Grid item xs={8}>
                  <Typography className={classes.primaryColor} variant="h4">
                    Formalário do Paciente
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                className={classes.mainContent}
                spacing={1}
              >
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    Sexo
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="sexomasculino"
                        id="sexomasculino"
                        label="Masculino"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="sexofeminino"
                        id="sexofeminino"
                        label="Feminino"
                        control={<Radio />}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Nome"
                    id="nome"
                    name="nome"
                    onChange={handleInputChange}
                    value={values.nome}
                  />
                </Grid>

                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Idade"
                    id="idade"
                    type="number"
                    name="idade"
                    onChange={handleInputChange}
                    value={values.idade}
                  />
                </Grid>

                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Registro"
                    id="registro"
                    name="registro"
                    onChange={handleInputChange}
                    value={values.registro}
                  />
                </Grid>

                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    id="data"
                    type="date"
                    name="data"
                    onChange={handleInputChange}
                    value={values.data}
                  />
                </Grid>

                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Diagnóstico"
                    id="diagnostico"
                    name="diagnostico"
                    onChange={handleInputChange}
                    value={values.diagnostico}
                  />
                </Grid>

                <Grid item xs={7}>
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Procedimento Proposto"
                    id="procedimento_Proposto"
                    name="procedimento_Proposto"
                    onChange={handleInputChange}
                    value={values.procedimento_Proposto}
                  />
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                    ANTECEDENTES PESSOAIS
                    <Divider />
                  </Typography>
                  <FormLabel className={classes.lineBreak} component="legend">
                    HAS (Hipertensao Arterial)
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="HipertensaoSim"
                        id="HipertensaoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="HipertensaoNao"
                        id="HipertensaoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Hipertensao"
                      id="HipertensaoSim"
                      name="HipertensaoSim"
                      onChange={handleInputChange}
                      value={values.HipertensaoSim}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    CARDIOPATIA ISQUÊMICA/ANGINA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="cardiopatiaSim"
                        id="cardiopatiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="cardiopatiaNao"
                        id="cardiopatiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Cardiopatia Isquêmica"
                      id="cardiopatia_angina"
                      name="cardiopatia_angina"
                      onChange={handleInputChange}
                      value={values.cardiopatia_angina}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    ARRITIMIA CARDÍACA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="arritimiaSim"
                        id="arritimiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="arritimiaNao"
                        id="arritimiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Arritimia Cardíaca"
                      id="arritimiaSim"
                      name="arritimiaSim"
                      onChange={handleInputChange}
                      value={values.arritimiaSim}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    CONDIÇÃO CARDÍACA ATIVA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="condicao_cardiaca_ativaSim"
                        id="condicao_cardiaca_ativaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="condicao_cardiaca_ativaNao"
                        id="condicao_cardiaca_ativaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Condição Cardíaca Ativa"
                      id="condicao_cardiaca_ativaSimSim"
                      name="condicao_cardiaca_ativaSimSim"
                      onChange={handleInputChange}
                      value={values.condicao_cardiaca_ativaSimSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    ASMA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="asmaSim"
                        id="asmaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="asmaNao"
                        id="asmaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de ASMA"
                      id="condicao_asma_sim"
                      name="condicao_asma_sim"
                      onChange={handleInputChange}
                      value={values.condicao_asma_sim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    INFECÇÃO RESPIRATÓRIA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="asmaSim2"
                        id="asmaSim2"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="asmaNao2"
                        id="asmaNao2"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de ASMA"
                      id="condicao_cardiaca_ativaasma"
                      name="condicao_cardiaca_ativaasma"
                      onChange={handleInputChange}
                      value={values.condicao_cardiaca_ativaasma}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    RONCO RUIDOSO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="ronco_ruidosoSim"
                        id="ronco_ruidosoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="ronco_ruidosoNao"
                        id="ronco_ruidosoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Ronco Ruidoso"
                      id="ronco_ruidosoSim"
                      name="ronco_ruidosoSim"
                      onChange={handleInputChange}
                      value={values.ronco_ruidosoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    APNÉIA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="apneiaSim"
                        id="apneiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="apneiaNao"
                        id="apneiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Apnéia"
                      id="apneiaSim"
                      name="apneiaSim"
                      onChange={handleInputChange}
                      value={values.apneiaSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    CANSAÇO DIURNO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="cansaco_diurnoSim"
                        id="cansaco_diurnoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="cansaco_diurnoNao"
                        id="cansaco_diurnoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Cansaço Diurno"
                      id="cansaco_diurnoSim"
                      name="cansaco_diurnoSim"
                      onChange={handleInputChange}
                      value={values.cansaco_diurnoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    TIREOIDOPATIA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="tireoidopatiaSim"
                        id="tireoidopatiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="tireoidopatiaNao"
                        id="tireoidopatiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>

                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de TIREOIDOPATIA"
                      id="tireoidopatiaSim"
                      name="tireoidopatiaSim"
                      onChange={handleInputChange}
                      value={values.tireoidopatiaSim}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    IRC
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="ircSim"
                        id="ircSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="ircNao"
                        id="ircNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de IRC"
                      id="ircSim"
                      name="ircSim"
                      onChange={handleInputChange}
                      value={values.ircSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    DIALÍTICO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="dialiticoSim"
                        id="dialiticoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="dialiticoNao"
                        id="dialiticoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Dialítico"
                      id="dialiticoSim"
                      name="dialiticoSim"
                      onChange={handleInputChange}
                      value={values.dialiticoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    EPILEPSIA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="epilepsiaSim"
                        id="epilepsiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="epilepsiaNao"
                        id="epilepsiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Epilepsia"
                      id="epilepsiaSim"
                      name="epilepsiaSim"
                      onChange={handleInputChange}
                      value={values.epilepsiaSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    AVC
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="avcSim"
                        id="avcSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="avcNao"
                        id="avcNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório do AVC"
                      id="avcSim"
                      name="avcSim"
                      onChange={handleInputChange}
                      value={values.avcSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    TABAGISMO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="tabagismoSim"
                        id="tabagismoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="tabagismoNao"
                        id="tabagismoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório do Tabagismo"
                      id="tabagismoSim"
                      name="tabagismoSim"
                      onChange={handleInputChange}
                      value={values.tabagismoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    ETILISMO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="etilismoSim"
                        id="etilismoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="etilismoNao"
                        id="etilismoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório do ETILISMO"
                      id="etilismoSim"
                      name="etilismoSim"
                      onChange={handleInputChange}
                      value={values.etilismoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    USO DE DROGAS
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="uso_drogasSim"
                        id="uso_drogasSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="uso_drogasNao"
                        id="uso_drogasNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Uso de DrogasSim"
                      id="uso_drogasSim"
                      name="uso_drogasSim"
                      onChange={handleInputChange}
                      value={values.uso_drogasSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    COAGULOPATIA
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="coagulopatiaSim"
                        id="coagulopatiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="coagulopatiaNao"
                        id="coagulopatiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório de Coagulopatia"
                      id="coagulopatiaSim"
                      name="coagulopatiaSim"
                      onChange={handleInputChange}
                      value={values.coagulopatiaSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    PORTADOR DE NECESSIDADES ESPECIAIS
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="pcdSim"
                        id="pcdSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="pcdNao"
                        id="pcdNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Tipo de Necessidades Especiais"
                      id="pcdSim"
                      name="pcdSim"
                      onChange={handleInputChange}
                      value={values.pcdSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    INTERNAÇÕES NO ÚLTIMO ANO
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="internacoes_ultimo_anoSim"
                        id="internacoes_ultimo_anoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="internacoes_ultimo_anoNao"
                        id="internacoes_ultimo_anoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite Histórico de Internações do Último Ano"
                      id="internacoes_ultimo_anoSim"
                      name="internacoes_ultimo_anoSim"
                      onChange={handleInputChange}
                      value={values.internacoes_ultimo_anoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    OUTROS
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="outrosSim"
                        id="outrosSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="outrosNao"
                        id="outrosNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite Histórico de Outros"
                      id="outrosSim"
                      name="outrosSim"
                      onChange={handleInputChange}
                      value={values.outrosSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                    CAPACIDADE FUNCIONAL
                    <Divider />
                  </Typography>
                  <FormLabel className={classes.lineBreak} component="legend">
                    Medicações de Uso Contínuo
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="medSim"
                        id="medSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="medNao"
                        id="medNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite o Histório do uso Continuo"
                      id="medSim"
                      name="medSim"
                      onChange={handleInputChange}
                      value={values.medSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    História de Alergias
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="alergiaSim"
                        id="alergiaSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="alergiaNao"
                        id="alergiaNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite Histórico de Alergias"
                      id="alergiaSim"
                      name="alergiaSim"
                      onChange={handleInputChange}
                      value={values.alergiaSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    Passado Cirúrgico
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="passadoCirurgicoSim"
                        id="passadoCirurgicoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="passadoCirurgicoNao"
                        id="passadoCirurgicoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite Histórico de Passado Cirurgicos"
                      id="passadoCirurgicoSim"
                      name="passadoCirurgicoSim"
                      onChange={handleInputChange}
                      value={values.passadoCirurgicoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                    História Pessoal/Familiar
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="adversoSim"
                        id="adversoSim"
                        label="Sim"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="adversoNao"
                        id="adversoNao"
                        label="Não"
                        control={<Radio />}
                      />
                    </RadioGroup>
                    <TextField
                      style={{ width: 400 }}
                      margin="normal"
                      variant="outlined"
                      label="Digite Histórico Familiar"
                      id="adversoSim"
                      name="adversoSim"
                      onChange={handleInputChange}
                      value={values.adversoSim}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                    EXAMES COMPLEMENTARES
                  </Typography>
                  <Divider />
                  <TextField
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Informe o HB"
                    id="infohb"
                    name="infohb"
                    onChange={handleInputChange}
                    value={values.infohb}
                  />
                </Grid>
                
                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                    EXAME FÍSICO
                  </Typography>
                  <Divider />
                  <TextField 
                    style={{ width: 400 }}
                    margin="normal"
                    variant="outlined"
                    label="Informe os Exames"
                    id="examefisico"
                    name="examefisico"
                    onChange={handleInputChange}
                    value={values.examefisico}
                    
                  />
              {/*      <Button
                      onClick={printPage}
                      variant="outlined"
                      color="primary"
                      style={{marginTop:20}}
                      style={{ fontSize: 20 }}
                    >
                      Imprimir Formulário
                      <PrintIcon />
                    </Button> */}
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                    CAPACIDADE FUNCIONAL
                  </Typography>
                  <Divider />
                  
                </Grid>
                
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                   METs
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                      <FormControlLabel
                        value="maiorMetsSim"
                        id="maiorMetsSim"
                        label=">04 METs"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                      <FormControlLabel
                        value="menorMetsSim"
                        id="menorMetsSim"
                        label="<04 METs"
                        control={<Radio />}
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <FormLabel className={classes.lineBreak} component="legend">
                  ABVDs
                  </FormLabel>
                  <FormControl component="fieldset">
                    <RadioGroup row>
                    <FormControlLabel
                        value="abvdSimIndependente"
                        id="abvdSimIndependente"
                        label="INDEPENDENTE"
                        control={<Radio color="primary" />}
                        color="primary"
                      />
                       <FormControlLabel
                        value="abvdSimdependente"
                        id="abvdSimdependente"
                        label="DEPENDENTE"
                        control={<Radio color="green" />}
                      />
                      <FormControlLabel
                        value="abvdSimParcialdependente"
                        id="abvdSimParcialdependente"
                        label="PARCIALMENTE DEPENDENTE"
                        control={<Radio />}
                      />
                      
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={7}>
                  <Typography className={classes.lineBreak} variant="h6">
                   MEDICAÇÕES DE USO CONTÍNUO 
                  </Typography>
                  <Divider />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} className={classes.secondaryContainer}>
              <Grid container></Grid>
              <Grid container className="mt-auto">
                <Grid item container ju>
                  <Grid item xs={12}>
                    <Button
                      onClick={printPage}
                      className={classes.primaryColor}
                      style={{ fontSize: 20 }}
                    >
                      Imprimir Formulário
                      <PrintIcon />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </div>
      <iframe
        style={{ height: 0, width: 0 }}
        className="d-none"
        id="iframetoprint"
        title="printable iframe"
      />
    </Dialog>
  );
}

export default withStyles(styles)(WireInfo);
