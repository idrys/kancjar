


<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
include 'Clients.php';


class Cases extends CI_Controller {

	public function __construct()
	{
		parent::__construct();

		$post = file_get_contents( 'php://input' );
		$_POST = json_decode( $post , true );
        //$this->load->model( 'Contacts_model' );
        $this->load->model( 'Cases_model' );
        //$this->load->controller( 'Clients' );
        //phpinfo();
	}

	public function get($id = false)
	{
	   
       $outputCases = $this->Cases_model->get( $id );
       
       echo json_encode( $outputCases );
       //echo 'Users...';

       
	}
    
    public function get2($id = false)
	{
	   
       $outputCases = $this->Cases_model->get( $id );
       
       echo json_encode( $outputCases );
       //echo 'Users...';
	}

    public function update()
    {
        $c = new Clients;
        $clientsWEB = array();
        echo '=============================================================================';

        // Pobiera cala tablice zaktualizowanych klentow
        $caseEdit = $this->input->post( 'caseEdit' );
        $arrayClients = $caseEdit['arrayClients'];      
        
        // Tworzy nowa tablice z ID
        for( $i=0; $i < count($arrayClients); $i++ ){
            $Contact = $arrayClients[$i];
            $clientsWEB[$i] = [ "ContactID"=>intval($Contact['id']), "CaseID"=>intval($caseEdit['id']) ];
        }
        
        
        $id = intval($caseEdit['id']);
        $clientsDB = $c->getCaseID( $id );
        echo 'delete: ' + $id;

        // Dodawanie nowego klienta 
        foreach ($clientsWEB as $key => $value) {
            $ContactID = intval($value['ContactID']);
            if ( !$this->FindObject( $ContactID, $clientsDB) ){
                $ClientRow = (array("ContactID"=>$ContactID, "CaseID"=>intval($caseEdit['id'])));
                $c->create($ClientRow) ;
            }
                
        }  
        
        //Usowanie roznic
        foreach ($clientsDB as $key => $value) {          
            if ( !$this->FindArray( intval($value->ContactID), $clientsWEB ) ){
                //$ClientRow = (array(intval($value->ContactID), $id));
                $ClientRow = array("ContactID"=>(intval($value->ContactID)), "CaseID"=>$id);
                
                
                $ClientID = $c->getID($ClientRow);
                
                $c->delete($ClientID) ;
            }

        }   

        echo '=============================================================================';  
    }
    
    public function create()
    {
        $caseEdit = $this->input->post( 'caseEdit' );
        $this->Cases_model->create( $caseEdit );
    }        
    
    public function delete()
    {
        $caseEdit = $this->input->post( 'caseEdit' );
        $this->Cases_model->delete( $caseEdit ); 
    }
    
    private function FindObject($ContactID, $objectClients){       
        foreach ($objectClients as $key => $value) {
            if ($value->ContactID == $ContactID)
                return true;
        }
        return false;
    }
    
    private function FindArray($ContactID, $arrayClients){       
        foreach ($arrayClients as $key => $value) {
            if ($value['ContactID'] == $ContactID)
                return true;
        }
        return false;
    }
    
   
    
}