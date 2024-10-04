package br.com.criandoapi.projetoSpexs.DAO;

import org.springframework.data.repository.CrudRepository;

import br.com.criandoapi.projetoSpexs.model.Usuario;

public interface IUsuario extends CrudRepository<Usuario, Integer> {

}
