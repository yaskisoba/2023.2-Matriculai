import React, { useState } from "react";
import CreateEletivas from "../CreateEletivas";

<form>
  <div>

  <label>
    Nome:
    <input type="text" name="Nome da eletiva" />
    Descrição:
    <input type="text" name="Descrição" />
    Ano letivo:
    <select name="Ano letivo"/>
    Professor:
    <input type="text" name="Professor responsável" />
    Número de vagas:
    <input type="text" name="Número de vagas" />
    Horário da disciplina:
    <input type="text" name="Horário" />  
  </label>
  <input type="submit" value="Enviar" />
  </div>
</form>

export default CreateEletivas;
