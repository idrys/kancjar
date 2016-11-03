
<?php 
defined('BASEPATH') OR exit ('Dupa !!');

class Users_model extends CI_Controller {

	public function get( $id = false )
	{
        if( $id == false)
        {
            $q = $this->db->get( 'users' );
            $q = $q->result();
        }
	    else {
            $this->db->where( 'id', $id );
            $q = $this->db->get('users');
            $q = $q->row();
        }
       return  $q ;
       //echo 'Users...';
	}


}