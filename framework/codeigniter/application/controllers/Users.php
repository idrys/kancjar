
<?php 
//  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

defined('BASEPATH') OR exit ('Dupa !!');

class Users extends CI_Controller {

    public function __constract()
	{
		parent::__construct();
        
        $post = file_get_contents('php://input');
        $_POST = json_decode($post, true);
	}

	public function get($id = false)
	{
	   $this->load->model( 'Users_model' );
       $output = $this->Users_model->get( $id );
       
       echo json_encode( $output );
       //echo 'Users...';
	}


}