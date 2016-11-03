<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Contacts extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents( 'php://input' );
		$_POST = json_decode( $post , true );
        $this->load->model( 'Contacts_model' );
	}

	public function get($id = false)
	{	   
       $output = $this->Contacts_model->get( $id );   
       echo json_encode( $output );
       //echo 'Users...';
	}

    public function update()
    {
        $contact = $this->input->post( 'contact' );
        $this->Contacts_model->update( $contact );
    }
    
    public function create()
    {
        $contact = $this->input->post( 'contact' );
        $this->Contacts_model->create( $contact );
    }        
    
    public function delete()
    {
        $contact = $this->input->post( 'contact' );
        $this->Contacts_model->delete( $contact ); 
    }
    
}